import { cn } from '@/lib/utils'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function HeadingOne({ children, className, ...props }: HeadingProps) {
    return (
        <h1
            className={cn(
                "text-2xl font-bold leading-none tracking-tight text-zinc-900 dark:text-zinc-50",
                className
            )}
            {...props}
        >{children}</h1>
    );
}