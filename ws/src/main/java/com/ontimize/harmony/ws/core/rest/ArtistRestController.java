package com.ontimize.harmony.ws.core.rest;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ontimize.db.EntityResult;
import com.ontimize.harmony.api.core.service.IArtistService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/artists") //TODO TEST
@ComponentScan(basePackageClasses = {com.ontimize.harmony.api.core.service.IArtistService.class})
public class ArtistRestController extends ORestController<IArtistService> {
	
	@Autowired
	private IArtistService artistService;
	
	
	@Override
	public IArtistService getService() {

		return this.artistService;
	}
		@RequestMapping(value = "newestArtists", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
		public EntityResult getNewestArtists() {
			
			return artistService.newestArtists();
		}
		@RequestMapping(value = "searchArtist", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
		public EntityResult artistSearch(@RequestBody Map<String, Object> req) {
			return this.artistService.artistSearch(req);
			
		}

}
