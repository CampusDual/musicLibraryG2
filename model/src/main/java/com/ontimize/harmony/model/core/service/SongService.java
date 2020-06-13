package com.ontimize.harmony.model.core.service;

import java.util.Arrays;
import java.util.Calendar;
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
import com.ontimize.harmony.api.core.service.ISongService;
import com.ontimize.harmony.model.core.dao.SongDao;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.ontimize.harmony.model.core.dao.AlbumDao;
@Service("SongService")
@Lazy
public class SongService implements ISongService {

	@Autowired private SongDao songDao;
	@Autowired private AlbumDao albumDao;
	@Autowired private DefaultOntimizeDaoHelper daoHelper; 
	@Override

	public EntityResult songQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
	
		return this.daoHelper.query(this.songDao, keyMap, attrList);
	}
	@Override
	public EntityResult newestSongs()
			throws OntimizeJEERuntimeException {
		Map<String, Object> keyMap= new HashMap<String, Object>();
		List<String> attrList = Arrays.asList(SongDao.ATTR_DURATION,SongDao.ATTR_NAME,SongDao.ATTR_SONG_ID, AlbumDao.ATTR_CREATION_DATE);
	
		
		return this.daoHelper.query(this.songDao, keyMap, attrList,"newestSongs");
	}
	
	@Override
	public EntityResult songInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException{
		return this.daoHelper.insert(this.songDao, attrMap);
		}

	@Override
	public EntityResult songUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.songDao, attrMap, keyMap);
	}

	@Override
	public EntityResult songDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		
		return this.daoHelper.delete(this.songDao, keyMap);
	}
	
	@Override
	public EntityResult searchSong(Map<String, Object> req) 
			throws OntimizeJEERuntimeException {

		try {
			List<String> columns = Arrays.asList(SongDao.ATTR_DURATION,SongDao.ATTR_NAME,SongDao.ATTR_SONG_ID);
			@SuppressWarnings("unchecked") //TODO Preguntar por esto
			Map<String,Object> filter =  (Map<String, Object>) req.get("filter");
			
			String nameToSearch = (String) filter.get("name");
			System.out.println(nameToSearch);
			Map<String,Object> key = new HashMap<String,Object>();
				key.put(SQLStatementBuilder.ExtendedSQLConditionValuesProcessor.EXPRESSION_KEY,
						searchLike(nameToSearch));
				
				return this.daoHelper.query(this.songDao, key, columns,"newestSongs");
		
		}catch(Exception e) {
			e.printStackTrace();
			EntityResult res = new EntityResult();
			res.setCode(EntityResult.OPERATION_WRONG);
			return res;
		}
	}
	
	
	
	
	//This returns a basicExpression with LIKE %searchTerm% that gets added onto a more complex SQL statement.
	private BasicExpression searchLike(String searchTerm) {
		String param = null;
		
		BasicField field = new BasicField(param);
		BasicExpression bexp1 = new BasicExpression(field, BasicOperator.LIKE_OP, "%"+searchTerm+"%");
		return bexp1;
	}
	
}
