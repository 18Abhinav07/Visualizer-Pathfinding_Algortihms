function Footer() {
    return (
        <footer className="flex flex-col">
            <span className="ml-5">
                <p className="font-mono font-bold text-blue-300 mb-3">Steps:</p>
                <p className="font-mono text-cyan-500" >Generate the maze, select algorithm, select speed and run.</p>
                <p className="font-mono text-lime-400">Use the reset button to reest the maze before using other  combinations.</p>
            </span>
            <div className="flex justify-between p-5">
                <div className="">
                    {/* Display the current year */}
                    <p className="font-bold md:text-lg sm:text-sm">© {new Date().getFullYear()}</p>
                </div>
                <div className="flex space-x-2 justify-end">
                    {/* Display the name */}
                    <h5 className="font-Poppins md:text-m xs:text-sm font-bold bg-gradient-to-r  from-blue-300 to-cyan-200 bg-clip-text text-transparent">Abhinav Pangaria</h5>
                    <ul className="flex flex-row space-x-1">
                        {/* Display links to Github */}
                        <a href="https://github.com/18Abhinav07" className="hover:underline mr-1"><li className="font-Poppins md:text-m xs:text-sm md:font-bold bg-gradient-to-r  from-blue-400 to-cyan-200 bg-clip-text text-transparent">Github</li> </a>
                        {/* Display links to LinkedIn */}
                        <a href="https://linkedin.com/in/abhinavpangaria1807200305" className="hover:underline"> <li className="font-Poppins md:text-m xs:text-sm md:font-bold bg-gradient-to-r  from-blue-400 to-cyan-200 bg-clip-text text-transparent">LinkedIn</li></a>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer