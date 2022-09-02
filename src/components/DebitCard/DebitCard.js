import classNames from 'classnames/bind';
import style from './DebitCard.module.scss';

import avt1 from '~/assets/Images/debit/VisaLogo.png'; 
import avt2 from '~/assets/Images/debit/chip.png'; 

const ctx = classNames.bind(style);

function DebitCard() {
  return (
    <div className={ctx('wapper')}>
      <img
        src={avt1}
        alt=""
        className={ctx('cardLogo')}
      />

      <img
        src={avt2}
        alt=""
        className={ctx('cardChip')}
      />

      <div className={ctx('card_number')}>1234 567 8920 3200</div>
      <div className={ctx('card_name')}>Vetrivel Ravi</div>
      <div className={ctx('card_from')}>10/21</div>
      <div className={ctx('card_to')}>10/25</div>
      <div className={ctx('card_ring')}></div>
    </div>
  );
}

export default DebitCard;
