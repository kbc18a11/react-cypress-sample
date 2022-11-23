import { FormEvent, useState } from 'react';
import { Link } from "react-router-dom";


export const Names = (): JSX.Element => {
    const [name, setName] = useState("");

    const [names, setNames] = useState([
        'じーさん',
        '孫',
        'ゲベ',
        '校長',
        '最強さん',
        'ちゃむらい'
    ]);

    /**
     * 名前一覧の表示タグの生成
     * 
     * @returns {JSX.Element[]} 
     */
    const generateDisplayedName = (): JSX.Element[] => {
        return names.map((name, i) =>
            <div id={`name-${i}`}>
                <Link to={`/name/${name}`}>
                    {name}
                </Link>
            </div>
        );
    }

    /**
     * 入力欄の入力値が変更されたときにnameに入力内容を適用させる
     * 
     * @param event 入力イベント
     */
    const handleChangName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    /**
     * フォームのサブミット
     * 
     * @param event サブミットイベント
     */
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setNames([...names, name]);
    }

    return (
        <div>
            <h1>名前一覧</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={handleChangName}
                />
                <input
                    type="submit"
                    value="名前の追加"
                />
            </form>
            <div className='names'>
                {generateDisplayedName()}
            </div>
        </div>
    );
}
