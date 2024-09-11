import MBTIOption from './MBTIOption';

export default function MBTIOptionGroup({ options, value, onChange }) { // onChange : useState() setter
    return (
        <div>
            {options.map((option) => (
                <MBTIOption
                    key={option.value}
                    /* compare current value */
                    selected={option.value === value}
                    label={option.label}
                    value={option.value}
                    onClick={() => onChange(option.value)}
                />
            ))}
        </div>
    )
}
