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
                                                                                 // here we put the locale that we choose to convert to the location of the user
  const publishedDateFormatted = format(publishedAt, "d 'of' LLLL 'at' h:mm"/*, { locale: ptBR,  }*/)
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,  { 
    addSuffix: true,
    /*locale: ptBR */ 
  }) // also can pass it here the 'locale'


  function handleCreateNewComment() {
    event.preventDefault()

    const newCommentText = event.target.comment.value

    setComments([...comments, newCommentText])
    event.target.comment.value = ''
  }

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
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave a feedback</strong>

        <textarea 
          name='comment'
          placeholder='Leave a comment'
        />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map( comment => {
          return (
            <Comment content={comment}/>
          )
        })}
      </div>
    </article>
  )
}