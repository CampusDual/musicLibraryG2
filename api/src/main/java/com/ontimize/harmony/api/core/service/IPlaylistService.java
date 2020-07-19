package com.ontimize.harmony.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface IPlaylistService {
	// PLAYLIST
	
	public EntityResult playlistQuery(Map<String, Object> keyMap,List<String> attrList) throws OntimizeJEERuntimeException;
	public EntityResult playlistInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
	public EntityResult playlistUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	public EntityResult playlistDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	public EntityResult newestPlaylists();
	public EntityResult playlistSong(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	public EntityResult playlistSearch(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
}
