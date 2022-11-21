import { useParams } from 'react-router-dom';


export const Name = () => {
    const { name } = useParams<{ name: string }>();

    return (
        <div className='name'>{name}</div>
    );
}
