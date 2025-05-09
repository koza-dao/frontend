// components/ui/slider.tsx

import * as Slider from '@radix-ui/react-slider'

interface SliderProps {
    defaultValue: number[]
    max: number
    step: number
    onValueChange: (value: number[]) => void
}

export const SliderComponent: React.FC<SliderProps> = ({ defaultValue, max, step, onValueChange }) => {
    return (
        <Slider.Root
            className="w-full"
            defaultValue={defaultValue}
            max={max}
            step={step}
            onValueChange={onValueChange}
        >
            <Slider.Track className="h-2 bg-gray-300 rounded-full">
                <Slider.Range className="h-2 bg-blue-500 rounded-full" />
            </Slider.Track>
            <Slider.Thumb className="w-4 h-4 bg-blue-500 rounded-full" />
        </Slider.Root>
    )
}
