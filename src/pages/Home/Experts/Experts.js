import React from 'react';

import experts1 from '../../../images/experts/1.png';
import experts2 from '../../../images/experts/2.png';
import experts3 from '../../../images/experts/3.png';
import experts4 from '../../../images/experts/4.png';
import experts5 from '../../../images/experts/5.png';
import Expert from '../Expert/Expert';

const ourExperts = [
    {img:experts1,name:"ande mare",expertise : 'Engine expert'},
    {img:experts2,name:"Kande ala",expertise : 'Polish expert'},
    {img:experts3,name:"Den mare",expertise : 'Engine expert'},
    {img:experts4,name:"Amre Am",expertise : 'Bike expert'},
    {img:experts5,name:"Jan Doe",expertise : 'Car expert'},
]
const Experts = () => {
    return (
        <div className="container" id="experts">
            <h2 className="text-primary my-5">Our Experts</h2>
            <div className="row">
                {
                    ourExperts.map(expert => <Expert
                    key={expert.name}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;