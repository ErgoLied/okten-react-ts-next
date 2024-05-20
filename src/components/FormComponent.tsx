import {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import IPostModel from "../models/IPostModel";
import {createPost} from "../services/api.service";
import {postValidator} from "../validators/post.validator";

import './FormComponent.css';

interface IFormProps extends IPostModel {
}

const FormComponent: FC = () => {

    const [success, setSuccess] = useState('');
    const [post, setPost] = useState<IPostModel | null>(null);

    const {
        handleSubmit,
        register,
        reset,
        formState: {errors, isValid}
    } = useForm<IFormProps>({mode: "all", resolver: joiResolver(postValidator)});

    const create = (formDataProps: IFormProps) => {
        createPost(formDataProps).then((json) => {
            console.log(json);
            if (json.status === 201) {
                reset();
                setSuccess('success!');
                setPost(json.data);
            }
        });

    }

    return (
        <div>
            <div>{success}</div>
            <form onSubmit={handleSubmit(create)}>
                <label>
                    <input type="number" {...register('userId')} placeholder={'user id'} min={1} max={10}/>
                    {errors.userId && <div>{errors.userId.message}</div>}
                </label>

                <label>
                    <input type="text" {...register('title')} placeholder={'title'}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </label>

                <label>
                    <textarea {...register('body')} placeholder={'place for your post'} rows={5} cols={50}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </label>

                <button disabled={!isValid}>create</button>
            </form>

                {post &&
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                }
        </div>
    );
};

export default FormComponent;