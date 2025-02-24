import React from "react";
import {Image} from "react-bootstrap";
import personImg from '../../../assets/main/images/person_1.jpg';

const CommentSection = () => {
    return (
        <div className="pt-5 mt-5">
            <h3 className="mb-5">6 Comments</h3>
            <ul className="comment-list">
                <li className="comment">
                    <div className="vcard bio">
                        <Image src={personImg} alt="Image placeholder"/>
                    </div>
                    <div className="comment-body">
                        <h3>John Doe</h3>
                        <div className="meta">June 20, 2019 at 2:21pm</div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem
                            laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe
                            enim sapiente iste iure! Quam voluptas earum impedit necessitatibus,
                            nihil?
                        </p>
                        <p><a href="#" className="reply">Reply</a></p>
                    </div>
                </li>

                <li className="comment">
                    <div className="vcard bio">
                        <Image src={personImg} alt="Image placeholder"/>
                    </div>
                    <div className="comment-body">
                        <h3>John Doe</h3>
                        <div className="meta">June 20, 2019 at 2:21pm</div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem
                            laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe
                            enim sapiente iste iure! Quam voluptas earum impedit necessitatibus,
                            nihil?</p>
                        <p><a href="#" className="reply">Reply</a>
                        </p>
                    </div>

                    <ul className="children">
                        <li className="comment">
                            <div className="vcard bio">
                                <Image src={personImg} alt="Image placeholder"/>
                            </div>
                            <div className="comment-body">
                                <h3>John Doe</h3>
                                <div className="meta">June 20, 2019 at 2:21pm</div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                                    quidem laborum necessitatibus, ipsam impedit vitae autem, eum
                                    officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
                                    impedit necessitatibus, nihil?</p>
                                <p><a href="#" className="reply">Reply</a>
                                </p>
                            </div>


                            <ul className="children">
                                <li className="comment">
                                    <div className="vcard bio">
                                        <Image src={personImg} alt="Image placeholder"/>
                                    </div>
                                    <div className="comment-body">
                                        <h3>John Doe</h3>
                                        <div className="meta">June 20, 2019 at 2:21pm</div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                                            autem, eum officia, fugiat saepe enim sapiente iste iure!
                                            Quam voluptas earum impedit necessitatibus, nihil?
                                        </p>
                                        <p><a href="#" className="reply">Reply</a></p>
                                    </div>

                                    <ul className="children">
                                        <li className="comment">
                                            <div className="vcard bio">
                                                <Image src={personImg} alt="Image placeholder"/>
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta">June 20, 2019 at 2:21pm</div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Pariatur quidem laborum necessitatibus, ipsam
                                                    impedit vitae autem, eum officia, fugiat saepe enim
                                                    sapiente iste iure! Quam voluptas earum impedit
                                                    necessitatibus, nihil?
                                                </p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="comment">
                    <div className="vcard bio">
                        <Image src={personImg} alt="Image placeholder"/>
                    </div>
                    <div className="comment-body">
                        <h3>John Doe</h3>
                        <div className="meta">June 20, 2019 at 2:21pm</div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem
                            laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe
                            enim sapiente iste iure! Quam voluptas earum impedit necessitatibus,
                            nihil?
                        </p>
                        <p><a href="#" className="reply">Reply</a></p>
                    </div>
                </li>
            </ul>

            <div className="comment-form-wrap pt-5">
                <h3 className="mb-5">Leave a comment</h3>
                <form action="#" className="p-5 bg-dark">
                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="website">Website</label>
                        <input type="url" className="form-control" id="website"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary"/>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default CommentSection;