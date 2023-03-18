import { axiosServices } from './axios.services';
import { urls } from '../config/urls';
import { ILaunchData } from '../types/launch.types';

const createSuccessOutput = (success) => success ? { success: { $eq: success } } : ''
const createDetailsOutput = (details) => details ? {details: {$ne: null}} : ''
const createNameOutput = (query) => query !== '' ? {name: {$regex: query, $options: 'i'}} : ''

export const launchesServices = {
  getLaunches: ({
                  pageNumber,
                  sortOrder,
                  sortParams,
                  searchQuery,
                  details,
                  success
                }) => axiosServices.post<ILaunchData>(urls.launchesQuery, {
    options: {
      limit: 30,
      page: pageNumber,
      sort: { [sortParams]: sortOrder }
    },
    query: {
      ...createNameOutput(searchQuery),
      ...createDetailsOutput(details),
      ...createSuccessOutput(success)
    }
  }).then(value => value.data)
};
