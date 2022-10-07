import React from 'react'
import Heading from './Heading'
import Text from './Text'

function Items(props) {
    return (
        <div className='w-full hidden md:flex text-white flex-col'>
            <Heading text={props.heading} />
            {props.heading === 'Glasses' ?
                <div className='flex py-1 flex-col'>
                    <Text text='round glasses' />
                    <Text text='wayfarer glasses' />
                    <Text text='cat eye glasses' />
                    <Text text='rectangular glasses' />
                    <Text text='rimless glasses' />
                    <Text text='verifocal glasses' />
                    <Text text='transitions glasses' />
                </div>
                : null}
                {props.heading === 'Sunglasses' ? <div className='flex py-1 flex-col'>
                    <Text text='aviator Sunglasses' />
                    <Text text='round Sunglasses' />
                    <Text text='cat eye Sunglasses' />
                    <Text text='wayfare Sunglasses' />
                    <Text text='designer Sunglasses' />
                    <Text text='polarised Sunglasses' />
                    <Text text='Prescription Sunglasses'/>
                </div> : null}
                {props.heading === 'Help & Faq' ? <div className='flex py-1 flex-col'>
                    <Text text='your prescription' />
                    <Text text='digital blue glasses' />
                    <Text text='lenses & coating' />
                    <Text text='anti reflective lenses' />
                    <Text text='how to order' />
                    <Text text='delivery information' />
                    <Text text='free returns'/>
                </div> : null}
                {props.heading === 'about us' ? <div className='flex py-1 flex-col'>
                    <Text text='our story' />
                    <Text text='contact us' />
                    <Text text='our blog' />
                    <Text text='privacy policy' />
                    <Text text='franchise' />
                </div> : null}
        </div>
    )
}

export default Items