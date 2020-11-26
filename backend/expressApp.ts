import {json, urlencoded} from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import {Application} from 'express';
import * as morgan from 'morgan';

const app: Application = express();

// Log Http requests
app.use(morgan('combined'));

// Parse JSON Body
app.use(json({limit: '50mb'}));

// Parse query string and url encoded form
app.use(urlencoded({limit: '50mb', extended: true}));

// Parse cookie
app.use(cookieParser());

// Add cors related headers
app.use(cors());

export const expressApp = app;
