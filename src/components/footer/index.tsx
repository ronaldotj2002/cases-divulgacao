
export default function Footer() {
    return (
        <div>
             <div className="grid grid-cols-6 gap-3 absolute bottom-0 left-0 right-0">               
                <div className="col-start-1 col-end-7 bg-slate-800">
                    <footer className="bg-slate-800 rounded-lg m-4">
                        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                            <span className="block text-xs text-slate-100 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://flowbite.com/" className="hover:underline">Ronaldotj™</a>. Todos os Estudos Reservados.</span>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}