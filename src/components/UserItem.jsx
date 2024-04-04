import './UserItem.css';

function UserItem(props) {
  const { name, email, marketValueTrend, isNew } = props;
  let marketBadge;

  // Ma folosesc de o structura decizionala if ca sa decid in functie de marketValueTrend ce badge sa afisez.

  if (marketValueTrend === 'same') {
    marketBadge = '🟰';
  } else if (marketValueTrend === 'up') {
    marketBadge = '⬆️'
  } else if (marketValueTrend === 'down') {
    marketBadge = '⬇️'
  } else {
    marketBadge = '';
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      {isNew && <p>🆕</p>}
      <p className="market-badge">Cota de piata: {marketBadge}</p>
    </div>
  );
}

export default UserItem;
