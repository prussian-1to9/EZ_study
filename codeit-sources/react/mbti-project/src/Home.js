import { Link } from 'react-router-dom';
import mock from './mock';

export default function Home() {
    console.log(mock);
    console.log(typeof mock);
    return (
        <div>
            <h1>MBTI별 좋아하는 컬러</h1>
            <div>
                <Link to="/new">+ 새 컬러 등록하기</Link>
            </div>
            <ul>
                {mock.map((item) => (
                    <li key={item.id}>
                        {item.id} {item.mbti} --- {item.colorCode}
                    </li>
                ))}
            </ul>
        </div>
    );
}
