import React, {useState} from "react";
import Comment from "./Comment";
import {useSelector} from "react-redux";
import useFetch from "../../../hooks/useFetch";
import {useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";

const CommentSection = ({ commentsData = [] }) => {
    console.log(commentsData)
    const [comments, setComments] = useState(commentsData);
    const apiUrl = useSelector((state) => state.global.ApiUrl);
    const { data, fetchData } = useFetch();
    const location = useLocation();
    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm();

    const addReply = (parentId, newComment) => {
        const addReplyRecursive = (commentList) => {
            return commentList.map((comment) => {
                if (comment.Id === parentId) {
                    return { ...comment, Children: [...comment.Children, newComment] };
                } else if (comment.Children.length > 0) {
                    return { ...comment, Children: addReplyRecursive(comment.Children) };
                }
                return comment;
            });
        };

        setComments(addReplyRecursive(comments));
    };

    const handleAddComment = async (data) => {

        const blogId = commentsData[0].BlogId;
        const parentId = 0;
        const name = data.name;
        const email = data.email;
        const message = data.message;

        const commentAddUrl = apiUrl + "/Comment/Add";
        const commentAddOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({blogId:blogId, parentId: parentId, name:name, email:email, commentText:message}),
            showToast: true,
            loadComponent: location.pathname.slice(1)
        };

        fetchData(commentAddUrl, commentAddOptions);
    };

    return (
        <div className="pt-5 mt-5">
            <h3 className="mb-5">{comments?.length > 0 ? `${comments.length} Yorum` : "Henüz yorum yok"}</h3>

            <Comment comments={comments} onReply={addReply} />

            <div className="comment-form-wrap pt-5">
                <h3 className="mb-5">Bir Yorum Bırak</h3>
                <form className="p-5 bg-dark" onSubmit={handleSubmit(handleAddComment)}>
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
                        <label htmlFor="email">E-posta *</label>
                        <input type="email" className="form-control" id="email"
                               {...register('email', {
                                   required: 'E-Posta gereklidir'
                               })}
                        />
                        {errors.email &&
                            <span style={{color: "red"}}>{errors.email.message}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mesaj</label>
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
                    <div className="form-group">
                        <input type="submit" value="Yorum Gönder" className="btn py-3 px-4 btn-primary" />
                    </div>
                </form>
            </div>
        </div>
    );
};


export default CommentSection;