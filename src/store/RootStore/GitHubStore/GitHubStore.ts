import ApiStore from '@store/ApiStore';
import { ApiResponse, HTTPMethod } from '@store/ApiStore/types';
import { BranchItemApi, RepoItemApi } from '@store/models';

import {
  IGitHubStore,
  GetOrganizationReposListParams,
  PostUserRepoParam,
  ErrorAnswer,
  SuccesRepo,
  GetBranchesListParams,
} from './types';

export default class GitHubStore implements IGitHubStore {
  private readonly apiStore = new ApiStore('https://api.github.com');

  async getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItemApi[], ErrorAnswer>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: '/orgs/' + params.organizationName + '/repos',
      headers: {},
      data: { per_page: params.perPage, page: params.page },
    });
  }

  async postUserRepo(
    params: PostUserRepoParam
  ): Promise<ApiResponse<SuccesRepo, ErrorAnswer>> {
    return await this.apiStore.request({
      method: HTTPMethod.POST,
      endpoint: `/user/repos`,
      headers: { authorization: `token ${params.userToken}` },
      data: {
        name: params.repoName,
        description: params.repoDescription,
        private: params.repoPrivate,
      },
    });
  }

  async getBranchesList(
    params: GetBranchesListParams
  ): Promise<ApiResponse<BranchItemApi[], ErrorAnswer>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: '/repos/' + params.owner + '/' + params.repo + '/branches',
      headers: {},
      data: {},
    });
  }
}
