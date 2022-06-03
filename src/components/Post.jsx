import { Coment } from "./Coment"

export const Post = () => {
    return (
        <article className="bg-box rounded-md w-full p-5 mb-5">
            <header className="flex justify-between mb-5">
                <div className="flex">
                    <img className='mr-2 w-11 rounded-lg border-2 border-green' src="https://avatars.githubusercontent.com/u/104519462?v=4" alt="" />
                    <div className="flex flex-col justify-center">
                        <span className="text-sm text-white">Alyson Barreto</span>
                        <span className="text-xs text-text">Developer</span>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <span className="text-xs text-gray-600">Publicado há 1h</span>
                </div>
            </header>

            <div className="text-xs pb-7 border-b border-line">
                <p>Fala galera!👋</p>
                <p>
                    Acabei de subir mais um projeto no meu portifa.
                    É um projeto que fiz no NLW Return, evento da Rocketseat.
                    O nome do projeto é DoctorCare 🚀
                </p>

                <div className="mt-4 flex flex-col space-y-2">
                    <a className="text-green hover:text-emerald-600" href="#"> 👉 jane.design/doctorcare</a>
                    <div className="text-green">
                        <div className="space-x-1">
                            <a className="hover:text-emerald-600" href="#">#novoprojeto</a>
                            <a className="hover:text-emerald-600" href="#">#nlw</a>
                            <a className="hover:text-emerald-600" href="#">#rocketseat</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <h2 className="mb-1 text-sm">Deixe seu comentário</h2>
                <form className="comentForm">
                    <textarea className="w-full rounded-md bg-bgDark resize-none text-white p-3 placeholder:text-line" placeholder="Deixe seu comentário    "></textarea>
                    <footer>
                        <button className={`bg-green px-3 py-1 text-white rounded-md mt-2 hover:bg-emerald-600`}>Publicar</button>
                    </footer>
                </form>
            </div>

            <div className="mt-7 space-y-3">
                <Coment />
            </div>
        </article>
    )
}