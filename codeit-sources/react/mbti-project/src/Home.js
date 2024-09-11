import { useState } from 'react';
import { Link } from 'react-router-dom';
import mock from './mock';

export default function Home() {
    // MBTI filter
    const [filter, setFilter] = useState(null);

    return (
        <div>
            <h1>favorite color by MBTI</h1>
            {filter && (
                <div onClick={() => setFilter(null)}>
                    {filter}
                    <img src="/images/x.svg" alt="unset filter"/>
                </div>
            )}
            <div>
                <Link to="/new">+ Add new color</Link>
            </div>
            <ul>
                {mock.map((item) => (
                    <li key={item.id}
                        onClick={() => setFilter(item.mbti)}>
                        {item.id} {item.mbti} --- {item.colorCode}
                    </li>
                ))}
            </ul>
        </div>
    );
}
