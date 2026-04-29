"use client"

import * as React from "react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
  type Locale,
} from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "lucide-react"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background p-3",
        className
      )}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),

        months: cn(
          "flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),

        month: cn("flex flex-col gap-4", defaultClassNames.month),

        nav: cn(
          "flex items-center justify-between",
          defaultClassNames.nav
        ),

        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-8 w-8 p-0",
          defaultClassNames.button_previous
        ),

        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-8 w-8 p-0",
          defaultClassNames.button_next
        ),

        month_caption: cn(
          "flex items-center justify-center",
          defaultClassNames.month_caption
        ),

        dropdowns: cn(
          "flex items-center gap-2 text-sm font-medium",
          defaultClassNames.dropdowns
        ),

        caption_label: cn(
          "text-sm font-medium",
          defaultClassNames.caption_label
        ),

        table: "w-full border-collapse",

        weekdays: cn("flex", defaultClassNames.weekdays),

        weekday: cn(
          "flex-1 text-xs text-muted-foreground text-center",
          defaultClassNames.weekday
        ),

        week: cn("flex w-full mt-2", defaultClassNames.week),

        day: cn(
          "relative h-10 w-10 p-0 text-center",
          defaultClassNames.day
        ),

        today: cn(
          "bg-muted rounded-md",
          defaultClassNames.today
        ),

        outside: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.outside
        ),

        disabled: cn(
          "opacity-50",
          defaultClassNames.disabled
        ),

        hidden: cn("invisible", defaultClassNames.hidden),

        ...classNames,
      }}
      components={{
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("h-4 w-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon className={cn("h-4 w-4", className)} {...props} />
            )
          }

          return (
            <ChevronDownIcon className={cn("h-4 w-4", className)} {...props} />
          )
        },

        DayButton: (props) => (
          <CalendarDayButton locale={locale} {...props} />
        ),

        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & {
  locale?: Partial<Locale>
}) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      className={cn(
        "h-10 w-10 p-0 text-sm",
        modifiers.selected && "bg-primary text-primary-foreground",
        modifiers.today && "bg-muted",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }