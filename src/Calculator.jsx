import {evaluate} from 'mathjs'
export default function Calculator()
{
    const numberButtons = ['1','2','3','4','5','6','7','8','9','0'];
    const oparators = ['+','-','*','/']

    const handleInput = (value) => {
        document.getElementById("input").value += value;
    }

    const handleEquation = () => {
        const equation = document.getElementById("input").value;
        document.getElementById("input").value = evaluate(equation);
    }
    
    const handleClear = () => {
        document.getElementById("input").value = "";
    }
    
    const buttonStyles = "border border-gray-500 rounded-full px-0 py-3 hover:bg-gray-500 duration-300 cursor-pointer";
    return(
        <div 
            className="max-w-[320px] m-auto bg-gray-600 text-white p-5 rounded-2xl"
        >
            <p 
                className="text-center text-2xl font-semibold"
            >
                    CALCULATOR
            </p>

            <p 
                 className="text-center text-xl mb-4"
            >
                (React.js and Tailwind CSS)
            </p>

            <div 
                className="flex justify-center"
            >
                <input 
                    className="border border-gray-500 outline-none min-w-62 pl-4 py-2 placeholder:text-xl rounded-full hover:bg-gray-500 duration-300"
                    type="text" 
                    placeholder="Enter values" id="input"
                />
            </div>
            
            <div 
                className="grid grid-cols-4 gap-4 px-4 py-4"
            >
                {
                    numberButtons.map((value,index) => (
                        <button 
                            className={buttonStyles}
                            onClick={() => handleInput(value)} 
                            key={index}
                        >
                            {value}
                        </button>
                    ))
                }

                {
                    oparators.map((oparator,index) => (
                        <button 
                            className={buttonStyles}
                            onClick={() => handleInput(oparator)} 
                            key={index}
                        >
                            {oparator}
                        </button>
                    ))
                }

                <button
                    className={buttonStyles}
                        onClick={handleClear}
                    >
                        C
                </button>
                <button 
                    className={buttonStyles}
                    onClick={handleEquation}
                >
                    =
                </button>

            </div>
        </div>
    )
}