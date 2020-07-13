package com.ontimize.harmony.model.core.service;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.ontimize.db.EntityResult;
import com.ontimize.db.SQLStatementBuilder;
import com.ontimize.db.SQLStatementBuilder.BasicExpression;
import com.ontimize.db.SQLStatementBuilder.BasicField;
import com.ontimize.db.SQLStatementBuilder.BasicOperator;
import com.ontimize.harmony.api.core.service.IAlbumService;
import com.ontimize.harmony.model.core.dao.AlbumDao;
import com.ontimize.harmony.model.core.dao.AlbumSongDao;
import com.ontimize.harmony.model.core.dao.ArtistDao;
import com.ontimize.harmony.model.core.dao.SongDao;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

@Service("AlbumService")
@Lazy
public class AlbumService implements IAlbumService {

	@Autowired private AlbumDao albumDao;
	@Autowired private AlbumDao artistDao;
	@Autowired private DefaultOntimizeDaoHelper daoHelper; 
	@Override
	
	public EntityResult albumQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		
		return this.daoHelper.query(this.albumDao, keyMap, attrList);
	}
	
	@Override
	public EntityResult albumInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException{
		return this.daoHelper.insert(this.albumDao, attrMap);
		}

	@Override
	public EntityResult albumUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.albumDao, attrMap, keyMap);
	}

	@Override
	public EntityResult albumDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		
		return this.daoHelper.delete(this.albumDao, keyMap);
	}

	@Override
	public EntityResult newestAlbums() throws OntimizeJEERuntimeException {
		Map<String, Object> keyMap= new HashMap<String, Object>();
		List<String> attrList = Arrays.asList(AlbumDao.ATTR_ALBUM_ID,AlbumDao.ATTR_TITLE, AlbumDao.ATTR_RELEASE_YEAR,AlbumDao.ATTR_CREATION_DATE, AlbumDao.ATTR_IMAGE_PATH);
		
		return this.daoHelper.query(this.albumDao, keyMap, attrList,"newestAlbums");
	}
	
	@Override
	@SuppressWarnings("unchecked")
	public EntityResult searchAlbum(Map<String, Object> req) throws OntimizeJEERuntimeException {
		try {
			List<String> columns = Arrays.asList(AlbumDao.ATTR_TITLE,AlbumDao.ATTR_CREATION_DATE,AlbumDao.ATTR_RELEASE_YEAR,ArtistDao.ATTR_NAME);
			
			Map<String,Object> filter = (Map<String, Object>) req.get("filter");
			
			String searchName = (String) filter.get("title");
			Map<String, Object> key = new HashMap<String, Object>();
			
			key.put(SQLStatementBuilder.ExtendedSQLConditionValuesProcessor.EXPRESSION_KEY, searchLike(AlbumDao.ATTR_TITLE, searchName));
			return this.daoHelper.query(this.albumDao, key, columns);
		} catch (Exception e) {
			e.printStackTrace();
			EntityResult res = new EntityResult();
			res.setCode(EntityResult.OPERATION_WRONG);
			return res;
			
		}
	}


	@Override
	public EntityResult albumSongs(Map<String, Object> req) throws OntimizeJEERuntimeException {
		try {
			List<String> columns = Arrays.asList(SongDao.ATTR_NAME,SongDao.ATTR_DURATION, AlbumSongDao.ATTR_TRACK_NUMBER);
			Map<String,Object> filter = (Map<String, Object>) req.get("filter");
			
			int id = Integer.parseInt((String) filter.get("id"));
			Map<String, Object> key = new HashMap<String, Object>();
			key.put(SQLStatementBuilder.ExtendedSQLConditionValuesProcessor.EXPRESSION_KEY,searchById(AlbumDao.ATTR_ALBUM_ID, id));
			return this.daoHelper.query(this.albumDao, key, columns);
			
		} catch (Exception e) {
			e.printStackTrace();
			EntityResult res = new EntityResult();
			res.setCode(EntityResult.OPERATION_WRONG);
			return res;
			
		}
	}
	
	
	private BasicExpression searchLike(String nameCol, String searchTerm) {
		
		BasicField param = new BasicField(nameCol);
		BasicExpression bexp = new BasicExpression(param,BasicOperator.LIKE_OP,'%'+searchTerm+'%');
		return bexp;
	}

	
	//This returns a basicExpression when you search by id in a SQL statement
		private BasicExpression searchById(String id, int searchTerm) {
			BasicField field = new BasicField(id);
			BasicExpression bexp = new BasicExpression(field,BasicOperator.EQUAL_OP,searchTerm);
			return bexp;
		}
	
	
}
