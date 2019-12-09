import React from 'react';

export default function CreateOffer(){
    return (
        <div className="form-wrapper-create">
            <h2>Create new post</h2>
            <form >
                <label htmlFor="title">
                    Post title
                        <input
                        type="text"
                        name="title"
                        placeholder="write title here"
                         required/>
                </label>
                <label htmlFor="imgUrl">
                    Image
                        <input
                        type="text"
                        name="imgUrl"
                        placeholder="enter image URL"
                        required/>
                </label>
                <label htmlFor="description">
                    Post description
                        <textarea
                        type="text"
                        name="description"
                        placeholder="write you content here"
                         required/>
                </label>
                <button className="button" type="submit">Create</button>
            </form>
        </div>
    )
}