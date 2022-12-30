import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './styles.module.css';

export function Post({author, content, publishedAt}){

    const [comments, setComments] = useState(['Muito bom véi']);
    const [newCommentContent, setNewCommentContent] = useState('');

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

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentContent]);
        setNewCommentContent('')
    }

    function handleCreateCommentText() {
        event.target.setCustomValidity('')
        setNewCommentContent(event.target.value);
    }

    function handleValidateInput() {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

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
            <form onSubmit={handleCreateNewComment} className={styles.formStyle}>
                <strong> Deixe seu feedback </strong>
                <textarea 
                    name="comentario" 
                    id="comentario" 
                    placeholder="Escreva um comentário..."
                    onChange={handleCreateCommentText}
                    onInvalid={handleValidateInput}
                    required
                    value={newCommentContent}
                    />
                <footer>
                    <button type="submit" disabled={newCommentContent.length == 0}> Publicar </button>
                </footer>
            </form>
            {
                comments.map(comment => {
                    return(
                        <Comment content={comment} />
                    );
                })
            }
        </article>
    );
}