package com.ontimize.harmony.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface IArtistService {
	// ARTIST
	
	public EntityResult artistQuery(Map<String, Object> keyMap,List<String> attrList) throws OntimizeJEERuntimeException;
	public EntityResult artistInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
	public EntityResult artistUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	public EntityResult artistDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	public EntityResult artistSearch(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	public EntityResult newestArtists();
	public EntityResult searchArtistById(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
}
