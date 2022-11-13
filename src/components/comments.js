import React from 'react'
import '../styles/comments.css'

const Comments = () => {
  return (
    <section className='comments'>

        <div className='comment_box'>
            <h2>Leave a comment</h2>
            <div>
                <input type="text" name="name" id="name" placeholder='Name' />
                <input type="text" name="email" id="email" placeholder='Email' />
                <textarea name="comment" id="" cols="30" rows="10"></textarea>
                <button>Submit Comment</button>
            </div>
        </div>

    </section>
  )
}

export default Comments