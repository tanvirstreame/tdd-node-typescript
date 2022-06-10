import { Schema, model } from 'mongoose';

interface IProduct {
    name: string;
    quantity: number;
    avatar?: string;
}

const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    avatar: String
});

model('Product', productSchema);
