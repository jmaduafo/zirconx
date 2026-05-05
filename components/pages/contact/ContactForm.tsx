'use client'

import PrimaryButton from '@/components/buttons/PrimaryButton'
import InfoContainer from '@/components/containers/InfoContainer'
import Header5 from '@/components/headings/Header5'
import {Button} from '@/components/ui/button'
import {Calendar} from '@/components/ui/calendar'
import {Checkbox} from '@/components/ui/checkbox'
import {Field, FieldGroup, FieldLabel, FieldLegend, FieldSet} from '@/components/ui/field'
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
import Logo from '@/public/logo/zircon_logo.png'
import {navigation, services} from '@/utils/data'
import {format} from 'date-fns'
import {ChevronDownIcon} from 'lucide-react'
import Image from 'next/image'
import React, {useState} from 'react'

function ContactForm() {
  const [date, setDate] = useState<Date>()
  return (
    <InfoContainer isMarginTop>
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="md:flex-1">
          <Header5 className="italic" text="Contact Us" />
        </div>
        <form className="w-full md:flex-[2]">
          <FieldGroup className="">
            <FieldSet>
              <FieldLegend>Event Overview</FieldLegend>
              <FieldGroup>
                <div className="grid sm:grid-cols-2 gap-x-3 gap-y-4">
                  <Field>
                    <FieldLabel htmlFor="first_name">First name *</FieldLabel>
                    <Input id="first_name" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="last_name">Last name *</FieldLabel>
                    <Input id="last_name" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">Email *</FieldLabel>
                    <Input id="email" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="phone_number">Phone number *</FieldLabel>
                    <Input id="phone_number" minLength={10} type="number" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="event_type">Event type *</FieldLabel>
                    <Select>
                      <SelectTrigger id="event_type" className="w-full">
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
                  </Field>
                  <Field>
                    <FieldLabel>Event date *</FieldLabel>
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
                          selected={date}
                          onSelect={setDate}
                          defaultMonth={date}
                        />
                      </PopoverContent>
                    </Popover>
                  </Field>
                  <Field className="sm:col-span-2">
                    <FieldLabel htmlFor="location">Location address *</FieldLabel>
                    <Input id="location" required />
                  </Field>
                  <Field className="">
                    <FieldLabel htmlFor="budget">Budget (in Naira) *</FieldLabel>
                    <Input id="budget" min={1} type="number" required />
                  </Field>
                  <Field className="">
                    <FieldLabel htmlFor="guests">Estimated number of guests *</FieldLabel>
                    <Input id="guests" min={1} type="number" required />
                  </Field>
                  <Field className="sm:col-span-2">
                    <FieldLabel htmlFor="additional">Tell us about your event *</FieldLabel>
                    <Textarea id="additional" required />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <FieldSet className="flex-[2]">
                <FieldLegend>Services Needed</FieldLegend>
                <FieldGroup className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  {services.map((service) => {
                    return (
                      <Field key={service.title} orientation="horizontal">
                        <Checkbox
                          id={service.title.toLowerCase().replace('-', ' ').split(' ').join('_')}
                          name={service.title.toLowerCase().replace('-', ' ').split(' ').join('_')}
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
                    )
                  })}
                </FieldGroup>
                <FieldGroup className='mt-5'>
                  <Field>
                    <PrimaryButton className='scale-90' text="Submit" type="submit" />
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
