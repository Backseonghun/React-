package org.mysite.board.Service;

import org.mysite.board.Entity.Board;
import org.mysite.board.Repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BoardService {
    @Autowired
    private BoardRepository boardRepository;

    public List<Board> findAll(){
        return boardRepository.findAll();
    }
    public Board findById(Long bno){
        return boardRepository.findById(bno).get();
    }
    public Board save(Board board){
        return boardRepository.save(board);
    }
    public void delete(Long bno){
        boardRepository.deleteById(bno);
    }
    public Board update(Board board, Long bno){
        Board board1 = findById(bno);
        board1.setTitle(board.getTitle());
        board1.setContent(board.getContent());
        return boardRepository.save(board1);
    }
    public Optional<Board> getBoardById(Long bno) {
        increaseHit(bno);
        return boardRepository.findById(bno);
    }

    public Board increaseHit(Long bno) {
        return boardRepository.findById(bno)
                .map(board -> {
                    board.setHit(board.getHit() + 1);
                    return boardRepository.save(board);
                })
                .orElse(null);
    }

}
