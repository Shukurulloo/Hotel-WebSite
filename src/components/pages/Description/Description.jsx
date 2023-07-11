import React from 'react'
import { Desn } from './DescriptionStyle'
import { Title } from '../../styles/homestyles'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const Testimonials = () => {
  return (
    <Desn>
    <Title>Testimonials</Title>   
    <h3>"Calm, Serene, Retro – What a way to relax and enjoy"</h3>
    <h5>Mr. and Mrs. Baxter, UK</h5>
    <div style={{display:"flex"}}>
    <Button>
    <FontAwesomeIcon icon={faAngleLeft} />
    </Button>
    <Button>
    <FontAwesomeIcon icon={faAngleLeft} rotation={180} />
    </Button>
    </div>
    </Desn>



  )
}

export default Testimonials