import app from '.';
import * as RazorPay from 'razorpay';
import {Request, Response} from 'express';

app.listen(3000, () => console.log(`listening on port no 3000!`));

app.post('/api', async (req: Request, res: Response) => {

  if (!req.body.paymentId || !req.body.amount) {
    return res.status(500).send('Please enter paymentId and amount.');
  }

  const razorpay = new RazorPay({
    key_id: process.env.KEY,
    key_secret: process.env.SECRET
  });
  const captureResult = await razorpay.payments.capture(req.body.paymentId, req.body.amount);

  if (captureResult.status !== 'captured') {
    return res.status(500).send('payment error.');
  }

  res.send(captureResult);

});
