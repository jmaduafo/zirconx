'use client'

import PrimaryButton from '@/components/buttons/PrimaryButton'
import InfoContainer from '@/components/containers/InfoContainer'
import MainHeader from '@/components/MainHeader'
import {Button} from '@/components/ui/button'
import {Calendar} from '@/components/ui/calendar'
import {Checkbox} from '@/components/ui/checkbox'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'
import {Input} from '@/components/ui/input'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {Textarea} from '@/components/ui/textarea'
import {sendEmail} from '@/emailjs/actions'
import Logo from '@/public/logo/zircon_logo.png'
import { SettingsQueryResult } from '@/sanity.types'
import {navigation, services} from '@/utils/data'
import {contactSchema} from '@/zod/validation'
import {zodResolver} from '@hookform/resolvers/zod'
import {format} from 'date-fns'
import {ChevronDownIcon} from 'lucide-react'
import Image from 'next/image'
import React, {useState} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {toast} from 'sonner'
import * as z from 'zod'

function ContactForm({ data }: {readonly data: SettingsQueryResult}) {
  const [date, setDate] = useState<Date>()

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      type: '',
      guests: '',
      address: '',
      budget: '',
      additional: '',
      services: [],
    },
  })

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    const contact = {
      ...data,
      date: date ? format(date, 'PPP') : undefined,
    }

    try {
      const res = await sendEmail(contact as z.infer<typeof contactSchema>)

      if (res.status === 200) {
        toast.success('Message sent successfully!', {
          description:
            'Your message has been sent to our team. Please allow 1 to 2 business days for us to get back to you.',
        })

        form.reset()
      }

    } catch (err: any) {
      console.log(err.message)
      
      toast.error('Whoops, something went wrong', {
        description: err.message || 'An unexpected error occurred.',
      })
    }
  }

  return (
    <InfoContainer isMarginTop>
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="md:flex-1">
          <MainHeader
            title="Contact us"
            subtitle="From intimate gatherings to grand celebrations, we are here to create an event tailored to you."
          />
        </div>
        <form className="w-full md:flex-[2]" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="">
            <FieldSet>
              <FieldLegend>Event Overview</FieldLegend>
              <FieldGroup>
                <div className="grid sm:grid-cols-2 gap-x-3 gap-y-4">
                  <Controller
                    name="first_name"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>First name *</FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="last_name"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Last name *</FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="email"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Email address *</FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="phone"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Phone number *</FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                          minLength={10}
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="type"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Event type *</FieldLabel>
                        <Select
                          name={field.name}
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            className="w-full"
                          >
                            <SelectValue placeholder="Select an event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Types</SelectLabel>
                              {navigation
                                ?.find((item) => item.title.toLowerCase().includes('event'))
                                ?.dropdown?.map((event) => {
                                  return (
                                    <SelectItem
                                      key={event.title}
                                      className="capitalize"
                                      value={event.title}
                                    >
                                      {event.title}
                                    </SelectItem>
                                  )
                                })}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="date"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Event date *</FieldLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              data-empty={!date}
                              className="normal-case px-2 border-transparent border-b border-b-foreground rounded-none justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                            >
                              {date ? format(date, 'PPP') : <span>Pick a date</span>}
                              <ChevronDownIcon strokeWidth={1} />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value ? new Date(field.value) : undefined}
                              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                              onSelect={(selectedDate) => {
                                field.onChange(selectedDate ? format(selectedDate, 'PPP') : '')
                                setDate(selectedDate)
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="address"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid} className="sm:col-span-2">
                        <FieldLabel htmlFor={field.name}>Location address *</FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="budget"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Budget (in Naira) *</FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                          min={1}
                          type="number"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="guests"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Number of guests *</FieldLabel>
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                          type="number"
                          min={1}
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Controller
                    name="additional"
                    control={form.control}
                    render={({field, fieldState}) => (
                      <Field data-invalid={fieldState.invalid} className="sm:col-span-2">
                        <FieldLabel htmlFor={field.name}>Tell us about your event *</FieldLabel>
                        <Textarea
                          {...field}
                          aria-invalid={fieldState.invalid}
                          id={field.name}
                          autoComplete="off"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                </div>
              </FieldGroup>
            </FieldSet>
            <div className="flex flex-row items-start gap-4">
              <FieldSet className="flex-1 sm:flex-[2]">
                <Controller
                  name="services"
                  control={form.control}
                  render={({field, fieldState}) => (
                    <>
                      <FieldLegend variant="label">Services Needed</FieldLegend>
                      <FieldGroup
                        data-slot="checkbox-group"
                        className="grid sm:grid-cols-2 gap-y-3 gap-x-6"
                      >
                        {services.map((service) => (
                          <Field
                            key={service.title}
                            orientation="horizontal"
                            data-invalid={fieldState.invalid}
                          >
                            <Checkbox
                              id={service.title
                                .toLowerCase()
                                .replace('-', ' ')
                                .split(' ')
                                .join('_')}
                              name={service.title
                                .toLowerCase()
                                .replace('-', ' ')
                                .split(' ')
                                .join('_')}
                              aria-invalid={fieldState.invalid}
                              checked={field.value.includes(service.title)}
                              onCheckedChange={(checked) => {
                                const newValue = checked
                                  ? [...field.value, service.title]
                                  : field.value.filter((value) => value !== service.title)
                                field.onChange(newValue)
                              }}
                            />
                            <FieldLabel
                              htmlFor={service.title
                                .toLowerCase()
                                .replace('-', ' ')
                                .split(' ')
                                .join('_')}
                              className="capitalize"
                            >
                              {service.title}
                            </FieldLabel>
                          </Field>
                        ))}
                      </FieldGroup>
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </>
                  )}
                />
                <FieldGroup className="mt-5">
                  <Field className="w-fit">
                    <PrimaryButton className="scale-90" text="Submit" type="submit" />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <div className="flex-1 object-cover object-top">
                <Image src={Logo} alt="logo" className="w-full h-full" />
              </div>
            </div>
          </FieldGroup>
        </form>
      </div>
    </InfoContainer>
  )
}

export default ContactForm
