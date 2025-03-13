import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import personImg from '../../../assets/main/images/person_1.jpg';
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import useFetch from "../../../hooks/useFetch";
import {useLocation} from "react-router-dom";

const Comment = ({ comments }) => {

    const location = useLocation();
    const apiUrl = useSelector((state) => state.global.ApiUrl);
    const { data, fetchData } = useFetch();
    const [replyingToId, setReplyingToId] = useState(null);
    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm();

    const handleReplyClick = (commentId) => {
        setReplyingToId(replyingToId === commentId ? null : commentId);
    };

    const handleReplySubmit = async (data) => {

        const blogId = comments[0].BlogId;
        const parentId = data.pId;
        const name = data.name;
        const email = data.email;
        const subject = data.subject;
        const message = data.message;

        const commentAddUrl = apiUrl + "/Comment/Add";
        const commentAddOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({blogId:blogId, parentId:parentId, name:name, email:email, subject:subject, commentText:message}),
            showToast: true,
            loadComponent: location.pathname.slice(1)
        };

        fetchData(commentAddUrl, commentAddOptions);

        setReplyingToId(null);
    };

    const renderComments = (comments) => {
        if (!comments || comments.length === 0) {
            return <li>Henüz yorum yapılmamış.</li>;
        }

        return comments.map((comment) => (

            <li className="comment" key={comment.Id}>
                <div className="vcard bio">
                    <Image src={personImg} alt="Image placeholder" />
                </div>
                <div className="comment-body">
                    <h3>{comment.Name}</h3>
                    <div className="meta">{comment.CreateDate}</div>
                    <p>{comment.CommentText}</p>
                    <p>
                        <button className="reply pe-auto" onClick={() => handleReplyClick(comment.Id)}>
                            Yanıtla
                        </button>
                    </p>

                    {replyingToId === comment.Id && (
                        <form className="reply-form" onSubmit={handleSubmit(handleReplySubmit)} >
                            <input type="text" hidden
                                   value={comment.Id}
                                   {...register('pId')}
                            />
                            <div className="form-group">
                                <label htmlFor="name">Adınız *</label>
                                <input type="text" className="form-control" id="name"
                                       {...register('name', {
                                           required: 'Ad gereklidir'
                                       })}
                                />
                                {errors.name &&
                                    <span style={{color: "red"}}>{errors.name.message}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-Posta *</label>
                                <input type="email" className="form-control" id="email"
                                       {...register('email', {
                                           required: 'E-Posta gereklidir'
                                       })}
                                />
                                {errors.email &&
                                    <span style={{color: "red"}}>{errors.email.message}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Konu *</label>
                                <input type="text" className="form-control" id="subject"
                                       {...register('subject', {
                                           required: 'Konu gereklidir'
                                       })}
                                />
                                {errors.subject &&
                                    <span style={{color: "red"}}>{errors.subject.message}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Mesaj *</label>
                                <textarea id="message" cols="30" rows="10"
                                          className="form-control"
                                          {...register('message', {
                                              required: 'Mesaj gereklidir'
                                          })}
                                >
                                </textarea>
                                {errors.message &&
                                    <span style={{color: "red"}}>{errors.message.message}</span>}
                            </div>

                            <button type="submit" className="btn btn-primary mt-2">Gönder</button>
                        </form>
                    )}
                </div>
                {(comment.Children || []).length > 0 && (
                    <ul className="children">{renderComments(comment.Children || [])}</ul>
                )}
            </li>
        ));
    };

    return <ul className="comment-list">{renderComments(comments)}</ul>;
};

export default Comment;