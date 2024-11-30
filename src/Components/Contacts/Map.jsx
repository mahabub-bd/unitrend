import { MapSection } from './Contacts.Styles';

function Map() {
    return (
        <MapSection>
            <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5055890149356!2d90.4360145!3d23.765004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a28898dc81%3A0x781e617296ae6c2a!2sUnitrend%20International!5e0!3m2!1sen!2sbd!4v1655826433694!5m2!1sen!2sbd"
                width="1920"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </MapSection>
    );
}

export default Map;
