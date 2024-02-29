import { TestBed } from '@angular/core/testing';

import { AuthServiceService } from './auth-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Route, UrlSegment } from '@angular/router';

describe('AuthServiceService', () => {
  let service: AuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should check for auth token', ()=>{
    let route: Route = {path:'/home'};
    const segments: UrlSegment[] = [];
    const matchResult = service.canMatch(route, segments);
    expect(matchResult).toEqual(true);

    localStorage.setItem('loggedIn', 'true')
    route = {path:'/home'};
    expect(matchResult).toEqual(true);
  })
});
