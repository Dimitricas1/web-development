export interface ErrorDescription {
    [code: number]: string;
  }
export const errorDescriptions:ErrorDescription = {
  402: 'Сервер сообщил о превышении лимита запросов',
  404: 'Данные не обнаружены на сервере'
};