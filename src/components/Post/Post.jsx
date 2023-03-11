import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
// import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'
                     
                      //destructuring
export function Post({ author, content, publishedAt }) {    
  const [comments, setComments] = useState([
    'Great milestone man, cheers!'
  ])
  const [newCommentText, setNewCommentText] = useState('');
                                                                                 // here we put the locale that we choose to convert to the location of the user
  const publishedDateFormatted = format(publishedAt, "d 'of' LLLL 'at' h:mm"/*, { locale: ptBR,  }*/)
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,  { 
    addSuffix: true,
    /*locale: ptBR */ 
  }) // also can pass it here the 'locale'


  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Please fill in the comment')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment =>{
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave a feedback</strong>

        <textarea 
          name='comment'
          placeholder='Leave a comment'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button 
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publish
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map( comment => {
          return (
            <Comment 
              key={comment} 
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}