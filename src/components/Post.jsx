import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import { useState } from 'react'

import { Avatar } from "./Avatar"
import { Coment } from "./Coment"


//componente recebe por props os dados da API listados no App
export const Post = ({ author, publisheAt, content }) => {
    const [coments, setComents] = useState([
        "Post muito massa, parabéns!"
    ])

    const [newComent, setNewComent] = useState('')

    // // usando função format do date-fns para formatar a data da região determinada 
    const publishedDateFormatted = format(publisheAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })

    // usando função formatDistanceToNow do date-fns para buscar o tempo relativo ao dia da criação 
    const publishedDateRelativeToNow = formatDistanceToNow(publisheAt, {
        locale: ptBR,
        addSuffix: true // para acrescentar o "há"
    })

    function handleCreateNewComent(e) {
        e.preventDefault()

        setComents([
            ...coments,
            newComent,
        ])

        setNewComent('')

    }

    function handleNewComentChange({ target }) {
        console.log(target.value)
        setNewComent(target.value)
    }

    // função para deletar os comentários listados no compenente "Coment"
    function deleteComent(comentToDelete) {
        const comentsWithoutDeletedOne = coments.filter(coment => {
            return coment !== comentToDelete
        })
        setComents(comentsWithoutDeletedOne)
    }

    const isNewComentEmpty = newComent.length === 0

    return (
        <article className="bg-box rounded-md w-full p-5 mb-5">
            <header className="flex justify-between mb-5">
                <div className="flex">
                    <Avatar profile={author.avatarUrl} />
                    <div className="flex flex-col justify-center ml-2">
                        <span className="text-sm text-white">{author.name}</span>
                        <span className="text-xs text-text">{author.role}</span>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <time
                        title={'ok'}
                        dateTime={publisheAt.toISOString()}
                        className="text-xs text-gray-600">
                        {publishedDateRelativeToNow}
                    </time>
                </div>
            </header>

            <div className="text-xs pb-7 border-b border-line">
                {/* map para percorrer as linhas do conteúdo e retornar os dados que vem da Api, 
                antes é preciso verificar se é paragráfo ou link */}

                {content.map((line, index) => {
                    if (line.type === 'paragraph') {
                        return <p key={`index-lista-line-${index}`} >{line.content}</p>
                    } else if (line.type === 'link') {
                        return <a key={`index-lista-line-${index}`} className="text-green hover:text-emerald-600" href="#">{line.content}</a>
                    }
                })}

            </div>

            <div className="mt-4">
                <h2 className="mb-1 text-sm">Deixe seu comentário</h2>
                <form
                    onSubmit={handleCreateNewComent}
                    className="comentForm">
                    <textarea
                        required={true}
                        value={newComent}
                        onChange={handleNewComentChange}
                        name='coment'
                        className="w-full rounded-md bg-bgDark resize-none text-white p-3 placeholder:text-line" placeholder="Deixe seu comentário    "></textarea>
                    <footer>
                        <button
                            disabled={isNewComentEmpty}
                            type='submit'
                            className={`bg-green px-3 py-1 text-white rounded-md mt-2`}>
                            Publicar
                        </button>
                    </footer>
                </form>
            </div>

            <div className="mt-7 space-y-3">
                {/* map para percorrer todos os comentários que vem da Api e retornar um componente "Coment" */}

                {coments.map((coment, index) => {
                    return (
                        <Coment
                            key={`index-lista-comentario-${index}`}
                            content={coment} // passando o conteúdo por props "content"
                            onDeleteComent={deleteComent} // passando a função como parâmetro para o componente "Coment"
                        />
                    )
                })}
            </div>
        </article>
    )
}