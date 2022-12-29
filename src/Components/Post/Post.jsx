import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './styles.module.css';

export function Post({author, content, publishedAt}){

    const dateFormated = format(publishedAt,"d 'de' MMMM 'às' kk'h'", {
        locale: ptBR,
    });

    const dateFormatedDistanceToNow = formatDistanceToNow(publishedAt, {
        addSuffix: true,
        locale: ptBR,
    });

    const contentFormated = content.map(line => {
        if(line.type == 'paragraph'){
            return <p> {line.content} </p>
        } else if(line.type == 'link'){
            return <p> <a href="#"> {line.content} </a> </p>
        }
    })

    return(
        <article className={styles.articleContainer}>
            <header className={styles.header}>
                <div className={styles.profile}>
                    <Avatar src={author.authorUrl}/>
                    <div className={styles.userProperties}>
                        <strong> {author.name} </strong>
                        <span> {author.role} </span>
                    </div>
                </div>
                <time title={dateFormated}>
                    {
                        dateFormatedDistanceToNow
                    }
                </time>
            </header>
            {
                contentFormated
            }
            <form className={styles.formStyle}>
                <strong> Deixe seu feedback </strong>
                <textarea name="comentario" id="comentario" placeholder="Escreva um comentário..."/>
                <footer>
                    <button type="submit"> Publicar </button>
                </footer>
            </form>
            <Comment />
            <Comment />
            <Comment />
        </article>
    );
}