import React, {useCallback, useState} from 'react';
import {Range, getTrackBackground} from 'react-range';

interface IPriceRangeProps {
    setRangeValues: (values: number[]) => void

}

const PriceRange: React.FC<IPriceRangeProps> = (props) => {
    const [values, setValues] = useState([500, 9000]);
    const onMouseDown = useCallback(() => {
        props.setRangeValues(values);
    }, []);

    return (
        <Range
            values={values}
            step={100}
            min={500}
            max={9000}
            onChange={values => setValues(values)}
            renderTrack={({props, children}) => (
                <div
                    onMouseDown={onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        height: '36px',
                        display: 'flex',
                        width: '470px',
                        margin: '30px',
                    }}>
                    <div
                        ref={props.ref}
                        style={{
                            height: '5px',
                            width: '400px',
                            borderRadius: '4px',
                            background: getTrackBackground({
                                values: values,
                                colors: ['#ccc', '#548BF4', '#ccc'],
                                min: 500,
                                max: 9000
                            }),
                            alignSelf: 'center'
                        }}>
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({index, props, isDragged}) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '12px',
                        width: '12px',
                        borderRadius: '1px',
                        backgroundColor: '#FFF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0px 2px 6px #AAA',
                    }}>
                    <div
                        style={{
                            position: 'absolute',
                            top: '-28px',
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                            padding: '4px',
                            borderRadius: '4px',
                            backgroundColor: '#548BF4'
                        }}>
                        {values[index].toFixed(0)}
                    </div>
                    <div
                        style={{
                            height: '16px',
                            width: '5px',
                            backgroundColor: isDragged ? '#548BF4' : '#CCC'
                        }}/>
                </div>
            )}
        />
    );
};

export default PriceRange;

