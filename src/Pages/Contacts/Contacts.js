import './Contacts.css';
import Title from '../../Components/Title/Title';

function Contacts() {
  return (
    <section className="Contacts">
      <div className="container">
        <Title>Контакты</Title>
        <h3 className="Contacts_tit">Наши Контакты:</h3>
        <div className="Contacts_in">
          <div className="Contacts_block">
            <div className="Contacts_block-tit">Whatsapp</div>
            <p className="Contacts_block-txt">+996 771-389-382</p>
            <p className="Contacts_block-txt">+996 771-389-382</p>
          </div>
          <div className="Contacts_block">
            <div className="Contacts_block-tit">наша локация</div>
            <p className="Contacts_block-txt">г.Каракол, ул.Ч.Айтматова 125</p>
          </div>
        </div>
        <div className="Contacts_map">
        <iframe className="map"
			src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac0ad8798afd38aa5bf6025c69a1103160f4dac4f5dd4229cd187b209152f518a&amp;source=constructor"
			width="100%" height="677" frameborder="0" title='bvc'></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contacts;