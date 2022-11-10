import { FormEvent, useState } from 'react';


const App = (): JSX.Element => {
    const [name, setName] = useState("");

    const [names, setNames] = useState([
        '孫',
        'じーさん',
        'げべ',
        '校長',
        '最強さん',
        'ちゃむらい'
    ])

    /**
     * 名前一覧の表示タグの生成
     * 
     * @returns {JSX.Element[]} 
     */
    const generateDisplayedName = (): JSX.Element[] => {
        return names.map((name, nameIndex) => <div id={String(nameIndex)}>{name}</div>);
    }

    const handleChangName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setNames([...names, name])
    }

    return (
        <div className="App">
            <h1>名前一覧</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} name="name" onChange={handleChangName} />
                <button>名前の追加</button>
            </form>
            <div className='names'>
                {generateDisplayedName()}
            </div>
        </div>
    );
}

export default App;
