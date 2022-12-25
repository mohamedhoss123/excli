import { Schema, InferSchemaType } from 'mongoose';

const schema = new Schema({
    
  });
  
type thisiplaceHolder = InferSchemaType<typeof schema>;
export default thisiplaceHolder