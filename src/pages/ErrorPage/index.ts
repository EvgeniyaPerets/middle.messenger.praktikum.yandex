import Handlebars from 'handlebars';
import error from './error.tmpl';
import link from '../../partials/link/link.tmpl';

Handlebars.registerPartial('link', link);

const page500 = Handlebars.compile(error)({
  errorStatus: 500,
  errorText: 'Мы уже фиксим',
  linkContext: { link: '/', text: 'Назад к чатам' },
});

const page404 = Handlebars.compile(error)({
  errorStatus: 404,
  errorText: 'Не туда попали',
  linkContext: { link: '/', text: 'Назад к чатам' },
});

export default {
  page404,
  page500,
};
