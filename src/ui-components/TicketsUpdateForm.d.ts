/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Tickets } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TicketsUpdateFormInputValues = {
    capacity?: number;
    qrString?: string;
    checkedIn?: boolean;
};
export declare type TicketsUpdateFormValidationValues = {
    capacity?: ValidationFunction<number>;
    qrString?: ValidationFunction<string>;
    checkedIn?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TicketsUpdateFormOverridesProps = {
    TicketsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    capacity?: PrimitiveOverrideProps<TextFieldProps>;
    qrString?: PrimitiveOverrideProps<TextFieldProps>;
    checkedIn?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TicketsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TicketsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tickets?: Tickets;
    onSubmit?: (fields: TicketsUpdateFormInputValues) => TicketsUpdateFormInputValues;
    onSuccess?: (fields: TicketsUpdateFormInputValues) => void;
    onError?: (fields: TicketsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TicketsUpdateFormInputValues) => TicketsUpdateFormInputValues;
    onValidate?: TicketsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TicketsUpdateForm(props: TicketsUpdateFormProps): React.ReactElement;
