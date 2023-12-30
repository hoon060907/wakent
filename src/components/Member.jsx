import classNames from "classnames";

const Member = ({ active, onClick, member }) => {
    return (
        <li onClick={() => {onClick(member)}} className={classNames({active})}>
            <img src={`images/${member}.webp`} alt="" width='150px' />
        </li>
    )
}

export default Member;