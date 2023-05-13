import express, { Application} from 'express';
import cors from 'cors'


const app:Application = express();
//Application route

import userRoute from './app/modules/user/user.route'

 //using cors
app.use(cors());

// parse data
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api/v1/user',userRoute );

  export default app;

  // pattern MVC, Modular 
  //** interface >> interface.ts  */
  //** Schema,model > model.ts */
  //** route  */
  //** route function >> controller.ts */
  //** database query function  > service */