import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="03 of March - 15:47h" dateTime="2023-03-05 15:47:53">Published 1h</time>
      </header>

      <div className={styles.content}>
        <p>Hey guys 👋</p>
        <p>I've just uploaded one more project to my portfolio. It's a project that I did in a one week program called NLW Return, a event presented by Rocketseat. The name of the project is DoctorCare</p>
        <p><a href="#">0xREALaldc.design/doctorcare</a></p>
        <p>
          <a href="#"> #newproject</a> {' '}
          <a href="#">#nlw</a> {' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave a feedback</strong>

        <textarea 
          placeholder='Leave a comment'
        />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}