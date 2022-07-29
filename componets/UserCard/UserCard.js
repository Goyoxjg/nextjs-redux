import styles from './UserCard.module.css';

const UserCard = (props) => {
    const { avatar, last_name, first_name, email } = props;

    return (
        <div className={`card mb-3 ${styles.cardUser}`}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={avatar} className="card-img-top" alt="..."></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{last_name + ' ' + first_name}</h5>
                        <span className="card-text">
                            <strong>Email:</strong><p className="card-text">{email}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;
